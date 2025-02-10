import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Clock } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

const RequestRideForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    date: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Requesting ride:", formData)
    toast({
      title: "Ride Request Submitted!",
      description: "We'll notify you when a driver accepts your request.",
    })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-wego-purple mb-4">Request a Ride</h2>
      <div className="grid gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input 
            className="pl-10" 
            placeholder="Departure Location" 
            value={formData.departure}
            onChange={(e) => setFormData({...formData, departure: e.target.value})}
            required
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input 
            className="pl-10" 
            placeholder="Destination" 
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
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit" className="bg-wego-purple hover:bg-wego-purple/90">
          Submit Request
        </Button>
      </div>
    </form>
  )
}

export default RequestRideForm
