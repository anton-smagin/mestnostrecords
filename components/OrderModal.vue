<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h4 class="modal-title">Заказать {{ itemTitle }}</h4>
        <button type="button" class="close-btn" @click="closeModal">
          <span>&times;</span>
        </button>
      </div>
      
      <div v-if="!orderSent && !showError" class="modal-body">
        <form @submit.prevent="submitOrder">
          <div class="form-group">
            <label for="name" class="form-label">Имя *</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="form-control"
              required
              placeholder="Ваше имя"
            />
          </div>
          
          <div class="form-group">
            <label for="contact" class="form-label">Контакт *</label>
            <input
              type="text"
              id="contact"
              v-model="formData.contact"
              class="form-control"
              required
              placeholder="Телефон или email"
            />
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Сообщение *</label>
            <textarea
              id="message"
              v-model="formData.message"
              class="form-control"
              rows="4"
              required
              placeholder="Что именно хотите заказать?"
            ></textarea>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Отмена
            </button>
            <button type="submit" class="btn btn-primary" :disabled="loading">
              {{ loading ? 'Отправка...' : 'Заказать' }}
            </button>
          </div>
        </form>
      </div>
      
      <div v-else-if="orderSent" class="modal-body">
        <div class="success-message">
          <div class="success-icon">✓</div>
          <h5>Мы с вами скоро свяжемся!</h5>
          <p>Спасибо за заказ. Мы обработаем его в ближайшее время.</p>
          <button type="button" class="btn btn-primary" @click="closeModal">
            Закрыть
          </button>
        </div>
      </div>
      
      <div v-else-if="showError" class="modal-body">
        <div class="error-message">
          <div class="error-icon">⚠</div>
          <h5>Произошла ошибка</h5>
          <p>{{ errorMessage }}</p>
          <div class="error-actions">
            <button type="button" class="btn btn-secondary" @click="retryOrder">
              Попробовать снова
            </button>
            <button type="button" class="btn btn-primary" @click="closeModal">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    itemTitle: {
      type: String,
      required: true
    },
    artistName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      formData: {
        name: '',
        contact: '',
        message: ''
      },
      loading: false,
      orderSent: false,
      showError: false,
      errorMessage: ''
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        // Prefill the message when modal opens
        this.formData.message = `Я бы хотел приобрести: ${this.artistName} - ${this.itemTitle}`
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
      // Reset form when closing
      setTimeout(() => {
        this.formData = {
          name: '',
          contact: '',
          message: ''
        }
        this.orderSent = false
        this.loading = false
        this.showError = false
        this.errorMessage = ''
      }, 300)
    },
    
    retryOrder() {
      this.showError = false
      this.errorMessage = ''
      this.submitOrder()
    },
    
    async submitOrder() {
      this.loading = true
      
      try {
        const message = `Заказ: ${this.itemTitle}\n\nИмя: ${this.formData.name}\nКонтакт: ${this.formData.contact}\nСообщение: ${this.formData.message}`
        
        // Try POST first, if CORS fails, fall back to GET
        let response
        try {
          response = await fetch('https://blue-lake-f917.mestnostishere.workers.dev/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              name: this.formData.name,
              message: message,
              auth: 'supersecretkey'
            })
          })
        } catch (corsError) {
          // If POST fails due to CORS, try GET request
          const params = new URLSearchParams({
            name: this.formData.name,
            message: message,
            auth: 'supersecretkey'
          })
          response = await fetch(`https://blue-lake-f917.mestnostishere.workers.dev/?${params.toString()}`, {
            method: 'GET'
          })
        }
        
        if (response.ok) {
          this.orderSent = true
        } else {
          throw new Error('Failed to send order')
        }
      } catch (error) {
        console.error('Error sending order:', error)
        this.errorMessage = 'Произошла ошибка при отправке заказа. Попробуйте еще раз.'
        this.showError = true
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background-color: #1a1a1a;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #333;
}

.modal-title {
  color: white;
  margin: 0;
  font-family: Acrom, sans-serif;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: white;
}

.modal-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  color: white;
  font-family: Acrom, sans-serif;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: white;
  font-family: Acrom, sans-serif;
  font-size: 14px;
}

.form-control:focus {
  outline: none;
  border-color: #91a79d;
  box-shadow: 0 0 0 2px rgba(145, 167, 157, 0.2);
}

.form-control::placeholder {
  color: #666;
}

.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 30px;
}

.btn {
  padding: 10px 20px;
  border-radius: 4px;
  font-family: Acrom, sans-serif;
  font-weight: bold;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #91a79d;
  color: black;
}

.btn-primary:hover:not(:disabled) {
  background-color: #7a8f7f;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: transparent;
  color: #999;
  border: 1px solid #333;
}

.btn-secondary:hover {
  background-color: #333;
  color: white;
}

.success-message {
  text-align: center;
  color: white;
}

.success-icon {
  font-size: 48px;
  color: #91a79d;
  margin-bottom: 20px;
}

.success-message h5 {
  font-family: Acrom, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}

.success-message p {
  font-family: Acrom, sans-serif;
  margin-bottom: 30px;
  opacity: 0.8;
}

.error-message {
  text-align: center;
  color: white;
}

.error-icon {
  font-size: 48px;
  color: #ff6b6b;
  margin-bottom: 20px;
}

.error-message h5 {
  font-family: Acrom, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ff6b6b;
}

.error-message p {
  font-family: Acrom, sans-serif;
  margin-bottom: 30px;
  opacity: 0.8;
}

.error-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { 
    opacity: 0;
    transform: translateY(-20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@media only screen and (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 10px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style> 
