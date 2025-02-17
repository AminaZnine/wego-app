
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Clock, Users, Building2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const PostRideForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    departure: "",
    destination: "",
    date: "",
    time: "",
    seats: ""
  })

  const finnishCities = [
    "Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", 
    "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Posting ride:", formData)
    toast({
      title: "Ride Posted Successfully!",
      description: "Your ride has been posted and is now visible to passengers.",
    })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-wego-purple mb-4">Post a Ride</h2>
      <div className="grid gap-4">
        <div className="relative">
          <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Select onValueChange={(value) => setFormData({...formData, fromCity: value})}>
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
          <Select onValueChange={(value) => setFormData({...formData, toCity: value})}>
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
          <Input 
            className="pl-10" 
            placeholder="Pickup Location" 
            value={formData.departure}
            onChange={(e) => setFormData({...formData, departure: e.target.value})}
            required
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input 
            className="pl-10" 
            placeholder="Dropoff Location" 
            value={formData.destination}
            onChange={(e) => setFormData({...formData, destination: e.target.value})}
            required
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input 
            className="pl-10" 
            type="date" 
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
        </div>
        <div className="relative">
          <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input 
            className="pl-10" 
            type="time" 
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            required
          />
        </div>
        <div className="relative">
          <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input 
            className="pl-10" 
            type="number" 
            placeholder="Available Seats" 
            min="1"
            max="8"
            value={formData.seats}
            onChange={(e) => setFormData({...formData, seats: e.target.value})}
            required
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit" className="bg-wego-purple hover:bg-wego-purple/90">
          Post Ride
        </Button>
      </div>
    </form>
  )
}

export default PostRideForm
