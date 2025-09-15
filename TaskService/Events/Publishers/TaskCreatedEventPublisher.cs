using System.Text;
using Contracts.Events;
using RabbitMQ.Client;

namespace Tasks.Events;

public class TaskCreatedEventPublisher
{
    public async void PublishTaskCreated(TaskCreatedEvent taskCreatedEvent)
    {
        // Create a connection to the server:
        var factory = new ConnectionFactory{HostName = "localhost"};
        // The connection abstracts the socket connection, and takes care of protocol version negotiation and authentication
        using var connection = await factory.CreateConnectionAsync();
        // The channel, is where most of the API for getting things done resides.
        using var channel = await connection.CreateChannelAsync();
        
        var queue = "taskCreatedEvent";
        
        // Declare a queue for us to send to
        // TODO: Need to come back to these arguments and figure out what they all do
        await channel.QueueDeclareAsync(queue: queue, durable: false, exclusive: false, autoDelete: false, arguments: null);
        
        var message = "Task created: " + taskCreatedEvent.Name;
        var body = Encoding.UTF8.GetBytes(message);

        await channel.BasicPublishAsync(exchange: string.Empty, routingKey: queue, body: body);

    }   
}