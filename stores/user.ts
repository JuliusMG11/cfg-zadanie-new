import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    invesmentCount: {
        price: 0,
    },
    contactInfo: {
        name: '',
        telNumber: 0,
        email: '',
    },
    privateInformation: {
        birthNumber: 0,
        idCardNumber: 0,
        address: '',
        bankAccountNumber: 0,
        gdpr: false
    }
  }),
  actions: {
    setInvesmentCount(data: { price: number }) {
      this.invesmentCount = data;
    },
    setContactInfo(data: { name: string; telNumber: number; email: string }) {
      this.contactInfo = data;
    },
    setPrivateInformation(data: { birthNumber: number; idCardNumber: number, address: string, bankAccountNumber: number, gdpr: boolean  }) {
      this.privateInformation = data;
    },
    submitFormDataToAPI() {
        // Replace 'YOUR_API_URL' with the actual API endpoint URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
        // Combine all step data into one object
        const formData = {
          ...this.InvesmentCount,
          ...this.ContactInfo,
          ...this.PrivateInformation,
        };
  
        // Send the data to the fake API using Axios
        axios.post(apiUrl, formData)
          .then((response) => {
            console.log('Form data submitted:', response.data);
            // Optionally, you can perform additional actions after successful submission
          })
          .catch((error) => {
            console.error('Error submitting form data:', error);
            // Handle error here if needed
          });
      },
  },
})