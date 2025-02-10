import { Button } from "@/components/ui/button"
import { Car, Clock as ClockIcon } from "lucide-react"

const AvailableRides = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-wego-purple">Available Rides</h2>
      </div>
      
      <div className="grid gap-4">
        {[
          { 
            date: "Mar 20", 
            time: "15:00", 
            route: "Helsinki → Turku",
            seats: 3,
          },
          { 
            date: "Mar 21", 
            time: "09:00", 
            route: "Tampere → Oulu",
            seats: 2,
          },
          { 
            date: "Mar 22", 
            time: "11:00", 
            route: "Turku → Helsinki",
            seats: 4,
          },
          { 
            date: "Mar 23", 
            time: "14:30", 
            route: "Oulu → Tampere",
            seats: 1,
          },
          { 
            date: "Mar 24", 
            time: "16:00", 
            route: "Helsinki → Tampere",
            seats: 3,
          },
        ].map((ride, index) => (
          <div 
            key={index}
            className="bg-white/70 backdrop-blur rounded-xl p-4 border border-wego-blue/20 flex items-center justify-between hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-wego-purple/10 flex items-center justify-center">
                <Car className="h-5 w-5 text-wego-purple" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{ride.route}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{ride.date} at {ride.time}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">{ride.seats} seats left</div>
              <Button variant="outline" size="sm">
                Book
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="py-12 text-center text-gray-400 border-t border-gray-100 mt-8">
        No more rides available
      </div>
    </div>
  )
}

export default AvailableRides
