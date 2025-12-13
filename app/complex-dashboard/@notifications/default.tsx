import { Card } from "@/app/components/card";
import Link from "next/link";

export default function NotificationsDefault(){
    return(
        <Card>
            <div>Notifications Default</div>
            <div>
                <Link href="/complex-dashboard/archived">Archived</Link>
            </div>
        </Card>
    );
}