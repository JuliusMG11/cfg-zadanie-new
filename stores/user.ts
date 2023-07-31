import { defineStore } from 'pinia'
import axios from 'axios'

const apiUrl = 'http://localhost:3000/users';

export const useUserStore = defineStore('user', {
  state: () => ({
    invesmentCount: {
        price: 0,
    },
    contactInfo: {
        name: '',
        telNumber: '',
        email: '',
    },
    privateInformation: {
        birthNumber: 0,
        idCardNumber: '',
        address: '',
        bankAccountNumber:'',
        gdpr: false
    }
  }),
  actions: {
    setInvesmentCount(data: { price: number }) {
      this.invesmentCount = data;
    },
    setContactInfo(data: { name: string; telNumber: string; email: string }) {
      this.contactInfo = data;
    },
    setPrivateInformation(data: { birthNumber: number; idCardNumber: number, string: string, bankAccountNumber: string, gdpr: boolean  }) {
      this.privateInformation = data;
    },

    submitFormDataToAPI() {
        // Combine all step data into one object
        const formData = {
          invesmentCount: {
            price: this.invesmentCount.price,
          },
          contactInfo: {
            name: this.contactInfo.name,
            telNumber: this.contactInfo.telNumber,
            email: this.contactInfo.email,
          },
          privateInformation: {
            birthNumber: this.privateInformation.birthNumber,
            idCardNumber: this.privateInformation.idCardNumber,
            address: this.privateInformation.address,
            bankAccountNumber: this.privateInformation.bankAccountNumber,
            gdpr: this.privateInformation.gdpr
          }
        };


  
        axios.post(apiUrl, formData)
          .then((response) => {
            console.log('Form data submitted:', response.data);
          })
          .catch((error) => {
            console.error('Error submitting form data:', error);
          });
          
          
          this.invesmentCount.price = 0
          this.contactInfo.name = ''
          this.contactInfo.telNumber = ''
          this.contactInfo.email = ''
          this.privateInformation.birthNumber = ''
          this.privateInformation.idCardNumber = ''
          this.privateInformation.address = ''
          this.privateInformation.bankAccountNumber = ''
      }
  },
})
