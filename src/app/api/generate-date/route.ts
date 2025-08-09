import { NextResponse } from 'next/server';
import { generateDateIdea } from '@/lib/emojis';
import { createClient } from '@/lib/supabase/client';

export async function POST(req: Request) {
  try {
    const { dateLength, source } = await req.json();
    if (!dateLength || !['3','4','5'].includes(String(dateLength))) {
      return NextResponse.json({ error: 'Invalid date length' }, { status: 400 });
    }
    if (source !== 'button') {
      return NextResponse.json({ error: 'Invalid source' }, { status: 400 });
    }
    const { emojis, description } = generateDateIdea(Number(dateLength));
    const supabase = createClient();
    const { data, error } = await supabase
      .from('dates')
      .insert({ emojis, description, source })
      .select()
      .single();
    if (error) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
    return NextResponse.json({ id: data.id, emojis, description });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = createClient();
    const { count, error } = await supabase
      .from('dates')
      .select('*', { count: 'exact', head: true })
      .eq('source', 'button');
    if (error) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 