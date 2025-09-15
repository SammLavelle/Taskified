using System.Text;
using NotificationService.Models;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace NotificationService.Services;

public class ConsumeRabbitMQMessagesService : BackgroundService
{
    private IConnection _connection;
    private IChannel _channel;
    
    protected async override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var factory = new ConnectionFactory()
        {
            HostName = "localhost",
        };
        
        _connection = await factory.CreateConnectionAsync();
        _channel = await _connection.CreateChannelAsync();
        
        await _channel.QueueDeclareAsync(
            queue: "taskCreatedEvent",
            durable: false,
            exclusive: false,
            autoDelete: false,
            arguments: null
        );
        
        var consumer = new AsyncEventingBasicConsumer(_channel);
        
        consumer.ReceivedAsync += async (model, ea) =>
        {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            
            var notification = new Notification
            {
                Message = message,
                DateCreated = DateTime.UtcNow,
            };
            //TODO - save this to DB
            
        };
        
        await _channel.BasicConsumeAsync(
            queue: "taskCreatedEvent",
            autoAck: true,
            consumer: consumer
        );

        // Keep service running
        await Task.Delay(Timeout.Infinite, stoppingToken);
    }
}