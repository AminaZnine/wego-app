import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Clock } from "lucide-react"

const RideSearch = () => {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-wego-blue/20">
      <h2 className="text-xl font-semibold text-wego-purple mb-4">Find a Ride</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input className="pl-10" placeholder="From" />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input className="pl-10" placeholder="To" />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input className="pl-10" type="date" />
        </div>
        <div className="relative">
          <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input className="pl-10" type="time" />
        </div>
      </div>
      <div className="flex items-center justify-end mt-4">
        <Button className="bg-wego-purple hover:bg-wego-purple/90">
          Search
        </Button>
      </div>
    </div>
  )
}

export default RideSearch
