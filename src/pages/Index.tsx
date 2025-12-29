import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: '100K Игровых денег',
    price: 99,
    type: 'money',
    discount: null,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP']
  },
  {
    id: 2,
    name: '500K Игровых денег',
    price: 449,
    type: 'money',
    discount: 10,
    popular: true,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP', 'Amazing RP']
  },
  {
    id: 3,
    name: '1M Игровых денег',
    price: 799,
    type: 'money',
    discount: 15,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP', 'Amazing RP']
  },
  {
    id: 4,
    name: '50 Donate-валюты',
    price: 149,
    type: 'premium',
    discount: null,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP']
  },
  {
    id: 5,
    name: '200 Donate-валюты',
    price: 549,
    type: 'premium',
    discount: 5,
    popular: true,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP']
  },
  {
    id: 6,
    name: '500 Donate-валюты',
    price: 1299,
    type: 'premium',
    discount: 20,
    popular: false,
    servers: ['Arizona RP', 'Radmir RP', 'Advance RP', 'Amazing RP']
  }
];

const servers = [
  { name: 'Arizona RP', players: '15000+', status: 'online' },
  { name: 'Radmir RP', players: '12000+', status: 'online' },
  { name: 'Advance RP', players: '8000+', status: 'online' },
  { name: 'Amazing RP', players: '6000+', status: 'online' }
];

const rules = [
  { title: 'Безопасная оплата', description: 'Все платежи защищены SSL-шифрованием' },
  { title: 'Моментальная доставка', description: 'Виртуальная валюта зачисляется в течение 5 минут' },
  { title: 'Гарантия качества', description: 'Возврат средств в случае технических проблем' },
  { title: 'Поддержка 24/7', description: 'Всегда готовы помочь с любыми вопросами' }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('catalog');
  const [selectedType, setSelectedType] = useState<'all' | 'money' | 'premium'>('all');

  const filteredProducts = selectedType === 'all' 
    ? products 
    : products.filter(p => p.type === selectedType);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-green">
                <Icon name="Gamepad2" className="text-black" size={24} />
              </div>
              <h1 className="text-2xl font-heading font-bold text-glow">GTA5 VIRTS</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {['catalog', 'servers', 'rules', 'contacts'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-medium transition-all ${
                    activeTab === tab 
                      ? 'text-primary text-glow' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab === 'catalog' && 'Каталог'}
                  {tab === 'servers' && 'Серверы'}
                  {tab === 'rules' && 'Правила'}
                  {tab === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button className="gta-gradient text-black font-bold hover:scale-105 transition-transform">
              <Icon name="ShoppingCart" size={18} />
              <span className="ml-2">Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'catalog' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-heading font-bold mb-4 text-glow">
                Виртуальная валюта GTA 5 RP
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Покупайте игровые деньги и донат-валюту для всех популярных серверов
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={selectedType === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedType('all')}
                className={selectedType === 'all' ? 'gta-gradient text-black' : ''}
              >
                Все товары
              </Button>
              <Button
                variant={selectedType === 'money' ? 'default' : 'outline'}
                onClick={() => setSelectedType('money')}
                className={selectedType === 'money' ? 'bg-primary text-black' : ''}
              >
                <Icon name="DollarSign" size={18} />
                <span className="ml-1">Игровые деньги</span>
              </Button>
              <Button
                variant={selectedType === 'premium' ? 'default' : 'outline'}
                onClick={() => setSelectedType('premium')}
                className={selectedType === 'premium' ? 'bg-accent text-white' : ''}
              >
                <Icon name="Gem" size={18} />
                <span className="ml-1">Донат-валюта</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className={`gta-border hover:scale-105 transition-all duration-300 relative overflow-hidden ${
                    product.popular ? 'animate-pulse-glow' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-accent text-white glow-purple">
                        <Icon name="Star" size={14} />
                        <span className="ml-1">Хит продаж</span>
                      </Badge>
                    </div>
                  )}
                  {product.discount && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-destructive text-white">
                        -{product.discount}%
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-green">
                      <Icon 
                        name={product.type === 'money' ? 'DollarSign' : 'Gem'} 
                        size={32} 
                        className="text-black"
                      />
                    </div>
                    <CardTitle className="text-center font-heading text-2xl">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-center">
                      Доступно на {product.servers.length} серверах
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        {product.price} ₽
                      </div>
                      {product.discount && (
                        <div className="text-sm text-muted-foreground line-through">
                          {Math.round(product.price / (1 - product.discount / 100))} ₽
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {product.servers.slice(0, 2).map((server) => (
                        <Badge key={server} variant="outline" className="text-xs">
                          {server}
                        </Badge>
                      ))}
                      {product.servers.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.servers.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full gta-gradient text-black font-bold hover:scale-105 transition-transform">
                      <Icon name="ShoppingCart" size={18} />
                      <span className="ml-2">Купить</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'servers' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-heading font-bold mb-4 text-glow">
                Поддерживаемые серверы
              </h2>
              <p className="text-muted-foreground text-lg">
                Мы работаем с самыми популярными GTA 5 RP проектами
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {servers.map((server, index) => (
                <Card 
                  key={server.name} 
                  className="gta-border hover:scale-105 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon name="Server" size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-heading">{server.name}</CardTitle>
                          <CardDescription>{server.players} игроков</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm text-primary font-medium">Online</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-heading font-bold mb-4 text-glow">
                Правила и гарантии
              </h2>
              <p className="text-muted-foreground text-lg">
                Мы заботимся о вашей безопасности и комфорте
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {rules.map((rule, index) => (
                <Card 
                  key={rule.title} 
                  className="gta-border hover:scale-105 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon 
                          name={
                            index === 0 ? 'Shield' : 
                            index === 1 ? 'Zap' : 
                            index === 2 ? 'CheckCircle' : 
                            'Headphones'
                          } 
                          size={24} 
                          className="text-accent"
                        />
                      </div>
                      <div>
                        <CardTitle className="font-heading mb-2">{rule.title}</CardTitle>
                        <CardDescription>{rule.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-heading font-bold mb-4 text-glow">
                Связаться с нами
              </h2>
              <p className="text-muted-foreground text-lg">
                Мы всегда на связи и готовы помочь
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="gta-border">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-sm text-muted-foreground">@gta5virts_support</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">support@gta5virts.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-muted-foreground mb-4">Режим работы: 24/7</p>
                    <Button className="gta-gradient text-black font-bold hover:scale-105 transition-transform">
                      <Icon name="Send" size={18} />
                      <span className="ml-2">Написать в поддержку</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border/40 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 GTA5 VIRTS. Все права защищены.</p>
          <p className="text-sm mt-2">Мы не связаны с Rockstar Games или Take-Two Interactive</p>
        </div>
      </footer>
    </div>
  );
}
