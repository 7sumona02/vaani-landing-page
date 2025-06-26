import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, X } from "lucide-react"

const Beats = () => {
  return (
    <div className='h-fit w-full bg-black pb-54 relative'>
        <div className='container max-w-6xl mx-auto text-white/60 px-20 pt-14 pb-6 relative flex flex-col gap-4'>
           <div className='font-bold pb-12 leading-[3.5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 tracking-wide'>Why Vaani Beats <br /> the Rest</div>
           <div className="bg-white/10 p-6 pb-20 border border-white/30 rounded-2xl">
<Table>
  <TableHeader>
    <TableRow className="text-2xl">
      <TableHead></TableHead>
      <TableHead>Vaani</TableHead>
      <TableHead>11ElevanLabs</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className='text-lg text-[#e9e9e9]'>
    <TableRow>
      <TableCell className="font-medium w-[380px] text-[#e9e9e9]">Indian-language support</TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <Check className="size-3" />
            </span>
            7 + (expanding)
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <Check className="size-3" />
            </span>
            Hindi (beta)
        </div>
        </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium w-[380px] text-[#e9e9e9]">Built-in SFX generator</TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <Check className="size-3" />
            </span>
            Indian ambiences
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <Check className="size-3" />
            </span>
            Global/English focused
        </div>
        </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium text-[#e9e9e9]">Personal-voice dubbing to Indian <br /> languages</TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <Check className="size-3" />
            </span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <X className="size-3" />
            </span>
        </div>
        </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium text-[#e9e9e9]">India-based data residency & <br /> INR billing</TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <Check className="size-3" />
            </span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
             <span className="grid size-4 place-content-center rounded-full bg-primary border text-sm text-primary-foreground">
            <X className="size-3" />
            </span>
        </div>
        </TableCell>
    </TableRow>
  </TableBody>
</Table>
           </div>
        </div>
        </div>
  )
}

export default Beats