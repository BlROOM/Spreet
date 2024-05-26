'use client'
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter(); // client에서 리다이렉트
    router.replace('/i/flow/login');
}
