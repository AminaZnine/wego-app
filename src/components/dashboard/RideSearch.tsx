
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Clock, Building2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const RideSearch = () => {
  const finnishCities = [
    "Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", 
    "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori"
  ];

  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-wego-blue/20">
      <h2 className="text-xl font-semibold text-wego-purple mb-4">Find a Ride</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Select>
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="From City" />
            </SelectTrigger>
            <SelectContent>
              {finnishCities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Select>
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="To City" />
            </SelectTrigger>
            <SelectContent>
              {finnishCities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input className="pl-10" placeholder="Pickup Location" />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input className="pl-10" placeholder="Dropoff Location" />
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
