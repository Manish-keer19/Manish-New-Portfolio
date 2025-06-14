
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const mockData = {
    users: [
      { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active" }
    ],
    gameResults: [
      { id: 1, game: "Poker", player: "Alice", result: "Win", amount: "$150" },
      { id: 2, game: "Blackjack", player: "Bob", result: "Loss", amount: "$75" },
      { id: 3, game: "Roulette", player: "Charlie", result: "Win", amount: "$200" }
    ],
    stats: {
      totalUsers: 1247,
      activeGames: 23,
      totalRevenue: 45720,
      conversionRate: 3.2
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Admin <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time analytics and management interface
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="glass border-0 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {mockData.stats.totalUsers.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </CardContent>
          </Card>
          
          <Card className="glass border-0 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-blue mb-2">
                {mockData.stats.activeGames}
              </div>
              <div className="text-sm text-muted-foreground">Active Games</div>
            </CardContent>
          </Card>
          
          <Card className="glass border-0 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                ${mockData.stats.totalRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
            </CardContent>
          </Card>
          
          <Card className="glass border-0 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-blue mb-2">
                {mockData.stats.conversionRate}%
              </div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Users Table */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="text-xl">Recent Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.users.map(user => (
                  <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Game Results Table */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="text-xl">Game Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.gameResults.map(result => (
                  <div key={result.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <div className="font-semibold">{result.game}</div>
                      <div className="text-sm text-muted-foreground">{result.player}</div>
                    </div>
                    <div className="text-right">
                      <Badge variant={result.result === 'Win' ? 'default' : 'destructive'}>
                        {result.result}
                      </Badge>
                      <div className="text-sm mt-1">{result.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
