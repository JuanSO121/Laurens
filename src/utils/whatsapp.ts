import { Product } from '../types/product';

export function openWhatsApp(product: Product): void {
  const phoneNumber = '573104134435'; // Número sin el +57
  const { name, brand, volume, gender } = product;

  const message = encodeURIComponent(
    `Hola! Me gustaría saber el precio de: ${name} ${brand} ${volume || ''} ${gender || ''}`
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

