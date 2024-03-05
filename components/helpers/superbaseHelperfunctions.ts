"use server"
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";


export const signUpHelper = async (prevState: { message: string; },formData: FormData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const display_name = formData.get("display_name") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {  data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error?.message) {
      return { message: error.message, data }
    }else{
      const result = supabase.from("profile").insert({ id: data?.user?.id, email, department: 2, display_name, role: 3 });
      return { message: "Successful", data, result }
    }
  };


export const signInHelper = async (prevState: { message: string; },formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    
      const supabase = createClient(cookieStore);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
    if (error?.message) {
      return { message: error.message, data }
    }else{
      return { message: "Successful", data }
    }
    
    // return redirect("/dashboard/roles");
  };

  export const getAllRequests = async () => {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.from("request").select();
    if (error?.message) {
      return { error, data }
    }else{
      return { message: "Successful", data }
    }
  }

  export const getLogedUser = async () => {
    const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      const { data: user, error } = await supabase.auth.getUser();
      return { user, error};
  }
