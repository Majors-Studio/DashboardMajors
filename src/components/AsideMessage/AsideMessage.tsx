import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldQuestionIcon } from "lucide-react";

const AsideMessage: React.FC = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div>
          <ShieldQuestionIcon size='20px' />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>Create adaproject</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardContent>
      <CardFooter>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default AsideMessage;
