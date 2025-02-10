import { Button } from "@/components/ui/button"
import { Car, CheckCircle, Clock as ClockIcon, XCircle } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"

const MyRides = () => {
  const handleCancelRide = (rideId: string) => {
    // Here you would make an API call to cancel the ride
    console.log("Cancelling ride:", rideId)
    toast.success("Ride cancelled successfully")
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-wego-purple">My Rides</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-wego-yellow">
            Upcoming
          </Button>
          <Button variant="outline" size="sm" className="border-wego-blue">
            History
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4">
        {[
          { id: "1", status: "upcoming", date: "Mar 20", time: "15:00", route: "Helsinki → Turku" },
          { id: "2", status: "ongoing", date: "Mar 18", time: "10:00", route: "Tampere → Oulu" },
        ].map((ride) => (
          <div 
            key={ride.id}
            className="bg-white/70 backdrop-blur rounded-xl p-4 border border-wego-blue/20 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-wego-purple/10 flex items-center justify-center">
                <Car className="h-5 w-5 text-wego-purple" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{ride.route}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{ride.date} at {ride.time}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm
                ${ride.status === 'upcoming' 
                  ? 'bg-wego-yellow/20 text-wego-purple' 
                  : 'bg-green-100 text-green-800'
                }`}
              >
                {ride.status === 'upcoming' ? (
                  <ClockIcon className="h-3 w-3" />
                ) : (
                  <CheckCircle className="h-3 w-3" />
                )}
                {ride.status === 'upcoming' ? 'Upcoming' : 'Ongoing'}
              </span>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    <XCircle className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to cancel this ride?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. All passengers will be notified of the cancellation.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No, keep the ride</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={() => handleCancelRide(ride.id)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Yes, cancel ride
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button variant="outline" size="sm">
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyRides