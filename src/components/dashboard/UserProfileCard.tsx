import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const UserProfileCard = () => {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-wego-blue/20">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-wego-purple">John Doe</h2>
          <span className="inline-block px-3 py-1 bg-wego-yellow/20 text-wego-purple rounded-full text-sm font-medium mt-1">
            Driver
          </span>
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Subscription active until Apr 15, 2024</span>
            </div>
            <Button 
              variant="outline" 
              className="mt-3 border-wego-yellow hover:bg-wego-yellow/10"
            >
              Manage Subscription
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard