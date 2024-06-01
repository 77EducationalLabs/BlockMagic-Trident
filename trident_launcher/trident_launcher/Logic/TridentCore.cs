using System.Diagnostics;
using tridentApi;
using trident_interfaces;

namespace tridentCore
{
    public class TridentCore
    {
        private string token;
        private List<Games> games;

        public TridentCore(string token)
        {
            this.token = token;
            games = new List<Games>();
        }

        private Process findProcess(string processName, Process[] processes)
        {
            Process process = processes.FirstOrDefault(p => p.ProcessName.IndexOf(processName, StringComparison.OrdinalIgnoreCase) >= 0);
            return process;
        }


        public async 

        Task
manipulateProcess(Process[] processes)
        {
                Console.WriteLine("inicio do processo");
                ApiClient apiConnection = new ApiClient();
                var orders = await apiConnection.GetUserOrdersAsync(this.token);

            if(orders.Count == 0)
            {
                Process process = findProcess("Bellum Galaxy Game", processes);
                if (process != null)
                {
                    Console.WriteLine($"\nTempo do processo = {process.StartTime}");
                    bool isClosed = process.CloseMainWindow();
                    process.Kill();
                }

            }
            if (orders != null)
            {
                foreach (var order in orders)
                {
                    Games gameItem = new Games
                    {
                        GameId = order.gameId,
                        Name = order.name,
                        ProcessName = order.processName,
                        DeveloperCompany = order.developerCompany,
                        IsBlocked = order.isBlocked,
                        GameImageUrl = order.gameImageUrl,
                        GameAddress = order.gameAddress,
                        Id = order.id,
                        PreviousOwner = order.previousOwner,
                        Receiver = order.receiver,
                        NftId = order.nftId,
                    };

                    games.Add(gameItem); // Adicione o jogo à lista
                }
            }



                    foreach (Games game in games)
                    {
                        Process process = findProcess(game.Name, processes);
                        
                        if (process != null)
                        {
                            Console.WriteLine($"Nome: {process.ProcessName}, ID: {process.Id}");
                            Console.WriteLine($"Processo encontrado para o jogo {game.Name}: {process.ProcessName}");
                            bool isClose = game.IsBlocked;
                            if (isClose)
                            {
                                Console.WriteLine($"\nNome: {process.ProcessName}, Será encerrado");
                                bool isClosed = process.CloseMainWindow();
                                Console.WriteLine($"\nTempo do processo = {process.StartTime}");
                                Console.WriteLine($"\nProcesso encerrado: {isClosed}");
                                process.Kill();
                            }

                        }
                    }
         }
    }
}
