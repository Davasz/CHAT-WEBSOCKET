import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3000";

class WebSocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(URL);

    this.socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });
  }

  public on(event: string, callback: (...args: any[]) => void): void {
    this.socket.on(event, callback);
  }

  public emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}

export default new WebSocketService();
