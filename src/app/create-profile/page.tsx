'use client'

import { FormInput } from "@/components/form-components/Input";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";



export default async function CreateProfile() {
    const { userId } = useAuth();
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const formData = Object.fromEntries(data.entries());

        const newUser = {
            userId,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
        }
        try {
            const res = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            if (res.status === 201) {
                router.push('/dashboard');
            }
            if (res.status === 400) {
                throw new Error('Bad Request');
            }
        } catch (error) {
            console.log(error); 
        }  
        
    };
    return (
        <div className="w-full max-w-4xl mx-auto p-3">
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md max-w-md mx-auto rounded px-8 pb-8 my-4"
            >
                <div className="w-full max-w-xs">
                    <h1 className="text-2xl">Create Profile</h1>
                </div>
                <div className="w-full max-w-sm">
                    <FormInput
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                    />
                    <FormInput
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />
                    <FormInput
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <button className="w-1/3 h-10 rounded-md text-slate-50 bg-sky-600">
                        Create Profile
                    </button>
                </div>
            </form>
        </div>
    )
}