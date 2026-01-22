import ConsultationForm from "@/components/home/ConsultationForm";

export default function GetStartedPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Let's Get Started</h1>
        <p className="text-gray-500">
          Fill out the form below to kickstart your project. We'll get back to you with a proposal within 24 hours.
        </p>
      </div>
      <ConsultationForm />
    </main>
  );
}