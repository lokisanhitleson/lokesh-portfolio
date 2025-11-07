import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get API key from environment variable
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY || 'ff56f803-9874-400a-9413-9a46c9111ba2';

    // Prepare form data for Web3Forms
    const formData = new FormData();
    formData.append('access_key', apiKey);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('from_name', 'Portfolio Contact Form');
    formData.append('redirect', 'false');

    // Submit to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
