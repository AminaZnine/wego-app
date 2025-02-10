import { Button } from "@/components/ui/button"
import { MapPin, Clock as ClockIcon, User } from "lucide-react"

const RideRequests = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-wego-purple">Ride Requests</h2>
      </div>
      
      <div className="grid gap-4">
        {[
          { 
            date: "Mar 21", 
            time: "14:00", 
            route: "Helsinki → Tampere",
            requester: "Emma K.",
          },
          { 
            date: "Mar 22", 
            time: "09:30", 
            route: "Turku → Helsinki",
            requester: "Mikko L.",
          },
          { 
            date: "Mar 23", 
            time: "16:00", 
            route: "Tampere → Oulu",
            requester: "Anna S.",
          },
        ].map((request, index) => (
          <div 
            key={index}
            className="bg-white/70 backdrop-blur rounded-xl p-4 border border-wego-yellow/20 flex items-center justify-between hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-wego-yellow/10 flex items-center justify-center">
                <User className="h-5 w-5 text-wego-yellow" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{request.route}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{request.date} at {request.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Requested by {request.requester}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                className="bg-wego-yellow hover:bg-wego-yellow/90 text-white"
                size="sm"
              >
                Accept Request
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="py-12 text-center text-gray-400 border-t border-gray-100 mt-8">
        No more ride requests
      </div>
    </div>
  )
}

export default RideRequests
