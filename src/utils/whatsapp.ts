export function openWhatsApp(productName: string): void {
  const phoneNumber = '34600000000'; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(`Hola! Me gustaría saber el precio de: ${productName}`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}