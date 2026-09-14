import { Project, SkillGroup, fallbackProjects, fallbackSkills } from "./data";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects(): Promise<Project[]> {
  if (!API_URL) return fallbackProjects;
  try {
    const res = await fetch(`${API_URL}/api/projects`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`status ${res.status}`);
    return await res.json();
  } catch {
    return fallbackProjects;
  }
}

export async function getSkills(): Promise<SkillGroup[]> {
  if (!API_URL) return fallbackSkills;
  try {
    const res = await fetch(`${API_URL}/api/skills`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`status ${res.status}`);
    return await res.json();
  } catch {
    return fallbackSkills;
  }
}
