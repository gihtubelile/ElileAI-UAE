"use server";
const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbw_LkGz253fFjCyKhbvHhUy23L9GenY2m8Ecx5ZGYGXK4-8N8lOdQS97zsBW-w2AtM5/exec";
export const addRegistration = async (formData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    const res = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        event: "Form Submission",
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to add registration to google spreadsheet");
    }
    return {
      successMessage:
        "Success! You have been successfully registered for our Form Submission",
    };
  } catch (error) {
    return {
      errorMessage: "Ooops! There was a problem with your registration!",
    };
  }
};
