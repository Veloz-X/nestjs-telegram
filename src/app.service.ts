import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  async createNotification(message: string) {
    const chat_id_telegram = '-4553147258';
    try {
      const telegramApiUrl =
        'https://api.telegram.org/bot7223868207:AAEjzUlmaUCUQQo9R79a8TyaDjXVcE3vZv4/sendMessage';
      const telegramMessage = {
        chat_id: chat_id_telegram,
        text: message,
      };

      const response = await axios.post(telegramApiUrl, telegramMessage);
      return{
        ok: true,
        response: "Message sent successfully"
      }

    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }
}
