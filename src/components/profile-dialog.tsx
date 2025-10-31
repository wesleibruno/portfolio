"use client";

import { profile, socialLinks } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function ProfileDialog() {
  const topSkills = (profile.skills ?? []).slice(0, 8);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ver perfil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{profile.name}</DialogTitle>
          <DialogDescription>{profile.headline}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/wesleibruno.png" alt={profile.name} />
            <AvatarFallback>WB</AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">
            {profile.contact?.email ? <p>{profile.contact.email}</p> : null}
            {profile.contact?.phone ? <p>{profile.contact.phone}</p> : null}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{profile.bio}</p>
        <div className="flex flex-wrap gap-2">
          {topSkills.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={socialLinks.linkedin} target="_blank">LinkedIn</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={socialLinks.github} target="_blank">GitHub</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


