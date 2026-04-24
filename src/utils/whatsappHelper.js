export const sendWhatsAppOrder = (cartItems, total, phoneNumber = "5511999999999") => {
  let message = `🎮 *NOVO PEDIDO (Player 1)* 🎮\n\n`;

  cartItems.forEach(item => {
    let optionsText = item.selectedOptions.length > 0 ? ` (${item.selectedOptions.join(', ')})` : '';
    let itemTotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
    message += `${item.quantity}x ${item.name}${optionsText} - R$ ${itemTotal}\n`;
  });

  message += `\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
