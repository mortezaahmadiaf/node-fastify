import { createClient, RedisClientType } from "redis";
export class Redis {
  private redis?: RedisClientType;
  private async connect() {
    try {
      const client: RedisClientType = await createClient();
      client.on("error", (err) => console.log("Redis Client Error", err));
      await client.connect();
      this.redis = client;
    } catch (error) {
      throw error;
    }
  }

  private async disconnect() {
    try {
      await this.redis?.disconnect();
    } catch (error) {
      throw error;
    }
  }

  async redisGet(key: string) {
    try {
      await this.connect();
      const existKey = await this.redis?.exists(key);
      if (existKey) {
        const value: any = await this.redis?.get(key);
        await this.disconnect();
        return JSON.parse(value);
      } else {
        throw { errorMessage: "Key Not Exists" };
      }
    } catch (error) {
      throw error;
    }
  }
  async redisSet(key: string, props: any, ttl: number = 60) {
    try {
      await this.connect();
      const value = await this.redis?.set(key, JSON.stringify(props));
      await this.redis?.expire(key, ttl);
      await this.disconnect();
      return value;
    } catch (error) {
      throw error;
    }
  }
}
