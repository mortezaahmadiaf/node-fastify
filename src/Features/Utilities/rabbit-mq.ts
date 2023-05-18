import amqplib, { Channel, Connection } from "amqplib/callback_api";
class RabbitMQ {
  protected EmailQueue: string = "Email-queue";
  protected SMSQueue: string = "SMS-queue";
  protected TestQueue: string = "Test-queue";
  constructor() {}
  protected async connect(): Promise<Channel> {
    return new Promise((resolve, reject) => {
      amqplib.connect(
        process.env.RABBIT_MQ_ADDRESS || "amqp://localhost:5672",
        (err, conn: Connection) => {
          if (err) {
            reject(err);
          }
          conn.createChannel((error, chan: Channel) => {
            if (error) {
              reject(error);
            }
            resolve(chan);
          });
        }
      );
    });
  }
}

export class RabbitMQSend extends RabbitMQ {
  async sendTest(SMS?: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const channel = await this.connect();
        channel.assertQueue(this.TestQueue);
        channel.sendToQueue(this.TestQueue, Buffer.from(SMS ?? "test SMS "));
        resolve("send test SMS");
      } catch (error) {
        reject(error);
      }
    });
  }

  async sendEmail() {}
  async sendSMS() {}
}
export class RabbitMQConsume extends RabbitMQ {
  async consumeTest() {
    try {
      const channel = await this.connect();
      channel.assertQueue(this.TestQueue);
      channel.consume(this.TestQueue, (msg) => {
        if (msg !== null) {
          console.log(msg.content.toString(), `Receive From ${this.TestQueue}`);
          channel.ack(msg);
        } else {
          console.log("Consumer cancelled by server");
        }
      });
    } catch (error) {}
  }

  async consumeAll() {
    try {
      await this.consumeEmail();
      await this.consumeSMS();
      await this.consumeTest();
    } catch (error) {}
  }

  async consumeEmail() {}
  async consumeSMS() {}
}
