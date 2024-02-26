import { SERVER_URL } from "@/constans";

interface formData {
  id: string;
  password: string;
}

export async function login(formData: formData) {
  const response = await fetch(`${SERVER_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) return response.json();

  return false;
}
