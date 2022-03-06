import java.net.*;
import java.io.*;

public class Server {

    private ServerSocket ss;

    public Server(ServerSocket ss){
        this.ss = ss;
    }

    public void startServer(){
        try {
            while (!ss.isClosed())
            {
                // blocking method
                Socket s = ss.accept();
                System.out.println("A new client has connected.");
                ClientHandler clientHandler = new ClientHandler(s);

                Thread thread = new Thread(clientHandler);
                thread.start();

            }
        } catch (IOException o){
            o.printStackTrace();
        }

    }


    public void closeServerSocket(){
        try {
            if(ss!=null){
                ss.close();
            }
        }catch (IOException o){
            o.printStackTrace();
        }
    }



    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(4999);
        Server server = new Server(ss);
        server.startServer();

    }
}
