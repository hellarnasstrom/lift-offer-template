
import { Building, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-background">
      {/* Header */}
      <header className="w-full py-8 px-6 glass-panel">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Building className="h-10 w-10 text-primary" />
            <h1 className="text-2xl font-bold text-primary">HissService AB</h1>
          </div>
          <p className="text-sm text-muted-foreground">Dokumentdatum: {new Date().toLocaleDateString("sv-SE")}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 animate-in">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="glass-panel p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Serviceavtal - Hissunderhåll</h2>
            <p className="text-muted-foreground mb-6">Offertnummer: 2024-001</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Leverantör</h3>
                <p className="font-medium">HissService AB</p>
                <p>Hissgatan 123</p>
                <p>123 45 Stockholm</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Kund</h3>
                <p className="font-medium">Fastighets AB Exempel</p>
                <p>Fastighetsgatan 456</p>
                <p>123 45 Stockholm</p>
              </div>
            </div>
          </section>

          {/* Service Details */}
          <section className="glass-panel p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Serviceavtalets omfattning</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">1. Underhållsservice</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Regelbunden kontroll och underhåll av hissanläggning</li>
                  <li>Säkerhetskontroller enligt gällande föreskrifter</li>
                  <li>Smörjning och justering av komponenter</li>
                  <li>Funktionskontroll av säkerhetssystem</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">2. Priser och betalningsvillkor</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Grundservice: 12 000 SEK/år</p>
                  <p>Akututryckningar: 1 200 SEK/timme</p>
                  <p>Betalningsvillkor: 30 dagar netto</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">3. Avtalstid</h3>
                <p className="text-muted-foreground">
                  Avtalet löper under 12 månader från och med undertecknandet med automatisk förlängning
                  om 12 månader om ingen uppsägning sker senast 3 månader före avtalstidens utgång.
                </p>
              </div>
            </div>
          </section>

          {/* Signature Section */}
          <section className="glass-panel p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Underskrifter</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-medium">För HissService AB</p>
                <div className="border-b border-primary/20 py-8"></div>
                <p className="text-sm text-muted-foreground">Namn och datum</p>
              </div>
              <div className="space-y-4">
                <p className="font-medium">För Fastighets AB Exempel</p>
                <div className="border-b border-primary/20 py-8"></div>
                <p className="text-sm text-muted-foreground">Namn och datum</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 glass-panel py-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Building className="h-5 w-5" />
              HissService AB
            </h3>
            <p className="text-sm text-muted-foreground">
              Ledande inom hissservice och underhåll sedan 1990
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontaktinformation</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                08-123 45 67
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@hissservice.se
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Hissgatan 123, 123 45 Stockholm
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Företagsinformation</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Org.nr: 556123-4567</p>
              <p>Bankgiro: 123-4567</p>
              <p>Godkänd för F-skatt</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
