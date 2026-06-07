import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'No slug' }, { status: 400 });

  // Prevent path traversal
  const safe = slug.replace(/\.\./g, '').replace(/^\/+/, '');
  const filePath = path.join(process.cwd(), 'content', `${safe}.mdx`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(raw);
  const mdxSource = await serialize(content);

  return NextResponse.json({ mdxSource, frontmatter: data });
}
