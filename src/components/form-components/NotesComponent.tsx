'use client'
import { TextField } from "@mui/material";



export default function PAndPNotes(){


    return (
        <div className="my-4 w-11/12">
            <TextField
                name="notes"
                className="w-full"
                id="notes-field"
                label="Notes"
                multiline
                rows={10}
            />
        </div>
    )
}