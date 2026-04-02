import csvData from '~/assets/data/mestnost_artists_social_media.csv?raw'

// Name mapping from CSV names to hardcoded names
const NAME_MAPPINGS = {
  'Andrei Rasputin': 'Andrey Rasputin',
  'H.Ruine': 'H. Ruine',
  'MIKHAIL KIREEV': 'Mikhail Kireev'
}

// Reverse mappings for lookup
const REVERSE_NAME_MAPPINGS = Object.fromEntries(
  Object.entries(NAME_MAPPINGS).map(([csv, hardcoded]) => [hardcoded, csv])
)

function parseCSV(csvString) {
  const lines = csvString.trim().split('\n')
  // Skip first row (metadata) and use second row as headers
  const headers = lines[1].split(',').map(h => h.trim())
  const artists = []

  for (let i = 2; i < lines.length; i++) {
    const values = parseCSVLine(lines[i])
    if (values[0]) {
      const artist = {}
      headers.forEach((header, index) => {
        artist[header] = values[index]?.trim() || ''
      })
      artists.push(artist)
    }
  }

  return artists
}

function parseCSVLine(line) {
  const values = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      values.push(current)
      current = ''
    } else {
      current += char
    }
  }
  values.push(current)

  return values
}

// Cyrillic to Latin transliteration map
const CYRILLIC_TO_LATIN = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
  'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
  'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
}

function transliterate(text) {
  return text.split('').map(char => {
    const lower = char.toLowerCase()
    if (CYRILLIC_TO_LATIN[lower] !== undefined) {
      return CYRILLIC_TO_LATIN[lower]
    }
    return char
  }).join('')
}

function generateSlug(name) {
  return transliterate(name)
    .toLowerCase()
    .replace(/\+/g, '-plus-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function normalizeForComparison(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

export function useArtists() {
  const artists = parseCSV(csvData)

  function getArtistBySlug(slug) {
    // Direct match (kebab-case)
    const direct = artists.find(artist => generateSlug(artist['артист']) === slug)
    if (direct) return direct

    // Convert CamelCase to kebab-case and try again
    const kebab = slug.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    return artists.find(artist => generateSlug(artist['артист']) === kebab) || null
  }

  function getArtistByName(name) {
    // First try exact match
    let artist = artists.find(a =>
      normalizeForComparison(a['артист']) === normalizeForComparison(name)
    )

    if (artist) return artist

    // Try mapping from hardcoded name to CSV name
    const csvName = REVERSE_NAME_MAPPINGS[name]
    if (csvName) {
      artist = artists.find(a =>
        normalizeForComparison(a['артист']) === normalizeForComparison(csvName)
      )
    }

    return artist || null
  }

  function hasSocialMedia(artistName) {
    const artist = getArtistByName(artistName)
    if (!artist) return false

    const socialFields = ['insta', 'vk', 'tg', 'soundcloud', 'bandcamp']
    return socialFields.some(field => {
      const value = artist[field]
      return value && value !== '' && value !== '—'
    })
  }

  function getSocialLinks(artist) {
    if (!artist) return []

    const links = []
    const platforms = [
      { field: 'insta', icon: 'instagram', name: 'Instagram' },
      { field: 'vk', icon: 'vk', name: 'VKontakte' },
      { field: 'tg', icon: 'telegram', name: 'Telegram' },
      { field: 'soundcloud', icon: 'soundcloud', name: 'SoundCloud' },
      { field: 'bandcamp', icon: 'bandcamp', name: 'Bandcamp' }
    ]

    platforms.forEach(platform => {
      let value = artist[platform.field]
      if (value && value !== '' && value !== '—') {
        // Fix telegram links that don't start with https://
        if (platform.field === 'tg' && !value.startsWith('http')) {
          value = value.startsWith('t.me/') ? `https://${value}` : `https://t.me/${value}`
        }
        links.push({
          url: value,
          icon: platform.icon,
          name: platform.name
        })
      }
    })

    return links
  }

  function getArtistSlug(artistName) {
    const artist = getArtistByName(artistName)
    if (artist) {
      return generateSlug(artist['артист'])
    }
    return generateSlug(artistName)
  }

  function getDisplayName(artist) {
    const csvName = artist['артист']
    // Return mapped hardcoded name if exists, otherwise CSV name
    return NAME_MAPPINGS[csvName] || csvName
  }

  function getAllArtists() {
    return artists
  }

  return {
    artists,
    getArtistBySlug,
    getArtistByName,
    hasSocialMedia,
    getSocialLinks,
    getArtistSlug,
    getDisplayName,
    getAllArtists,
    generateSlug
  }
}
