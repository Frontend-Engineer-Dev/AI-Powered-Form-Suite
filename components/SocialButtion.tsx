"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import ActionButton from "./Button";
import UserProfile from "./UserProfile";

export default function SocialButton() {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <SignInButton mode="modal">Sign In</SignInButton>

        <SignUpButton mode="modal">
          <ActionButton type="button" className="bg-primary text-white">
            Sign Up
          </ActionButton>
        </SignUpButton>
      </SignedOut>

      {/* User Profile */}
      <UserProfile />
    </div>
  );
}
