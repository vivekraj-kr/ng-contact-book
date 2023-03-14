export class ContactFormService {
  contactFormData() {
    return {
      contacts: [
        { id: 1, name: 'John', email: 'john@gmail.com', number: 123456789 },
        { id: 2, name: 'Doe', email: 'doe@gmail.com', number: 123456780 },
      ],
    };
  }
}
