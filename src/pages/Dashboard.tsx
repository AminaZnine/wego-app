import { Button } from "@/components/ui/button";
import { Plus, Search, CarTaxiFront } from "lucide-react";
import Navigation from "@/components/Navigation";
import RideSearch from "@/components/dashboard/RideSearch";
import AvailableRides from "@/components/dashboard/AvailableRides";
import RideRequests from "@/components/dashboard/RideRequests";
import PostRideForm from "@/components/dashboard/PostRideForm";
import RequestRideForm from "@/components/dashboard/RequestRideForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";

const Dashboard = () => {
  const [activeDialog, setActiveDialog] = useState<"post" | "request" | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wego-blue/20 to-white pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-white/95 to-wego-purple/10 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-wego-purple">WeGo</h1>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Dialog open={activeDialog === "request"} onOpenChange={(open) => setActiveDialog(open ? "request" : null)}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline"
                    className="bg-white/80 hover:bg-wego-yellow/20 border-2 border-wego-yellow text-wego-purple font-semibold transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Request a Ride
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <RequestRideForm onClose={() => setActiveDialog(null)} />
                </DialogContent>
              </Dialog>
              
              <Dialog open={activeDialog === "post"} onOpenChange={(open) => setActiveDialog(open ? "post" : null)}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline"
                    className="bg-white/80 hover:bg-wego-purple/20 border-2 border-wego-purple text-wego-purple font-semibold transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <CarTaxiFront className="mr-2 h-4 w-4" />
                    Post a Ride
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <PostRideForm onClose={() => setActiveDialog(null)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8">
          {/* Ride Search Section */}
          <RideSearch />
          
          {/* Tabs for Available Rides and Ride Requests */}
          <Tabs defaultValue="available" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="available" className="text-lg">Available Rides</TabsTrigger>
              <TabsTrigger value="requests" className="text-lg">Ride Requests</TabsTrigger>
            </TabsList>
            <TabsContent value="available">
              <AvailableRides />
            </TabsContent>
            <TabsContent value="requests">
              <RideRequests />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Navigation */}
      <Navigation userType="passenger" />
    </div>
  );
};

export default Dashboard;
