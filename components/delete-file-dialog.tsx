import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

import { Dialog, DialogDescription, DialogHeader, DialogFooter, DialogContent, DialogTitle } from "./ui/dialog";
import Image from "next/image";


const DeleteFileDialog = ({deleteOpen, setDeleteOpen, selectedItem, getFileIcon}: {deleteOpen: boolean, setDeleteOpen: (open: boolean) => void, selectedItem: any, getFileIcon: (name: string) => string}) => {
  const handleDelete = () => {
    setDeleteOpen(false);
  };
  return <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
  <DialogContent className="bg-[#EFF4FF]">
    <DialogHeader>
      <DialogTitle>
        <div className="flex flex-col gap-2">
          <Trash2 size={24} className="text-primary" />
          <p className="text-[0.833vw] text-primary font-bold">
            Delete {selectedItem?.name} from
          </p>
          <h4 className="text-[1.25vw] font-bold my-[0.417vw] text-soft-black">Data Room</h4>
        </div>
      </DialogTitle>
      <DialogDescription className="pt-4">
        <div className="flex items-center justify-between gap-2 bg-white p-[0.417vw] rounded-md text-[0.885vw] font-medium">
          <div className="flex items-center gap-2 text-soft-black">
            <div className="rounded-[0.125vw] bg-[#EFF4FF] flex items-center justify-center p-[0.325vw]">
              <Image
                src={getFileIcon(selectedItem?.name)}
                alt="pdf"
                width={20}
                height={20}
              />
            </div>
            {selectedItem?.name}
          </div>
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="flex gap-2 pt-4">
      <Button
        variant="ghost"
        onClick={() => setDeleteOpen(false)}
        className="cursor-pointer"
      >
        Cancel
      </Button>
      <Button variant="destructive" onClick={handleDelete} className="cursor-pointer bg-primary text-white">
        Delete File
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
};

export default DeleteFileDialog;

