import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. P. Mahaboob Basha Sahab</h2>
                <h5>
                    <strong>Lorry Owner</strong>, Adoni.
                </h5>
                <h5 className="mt-3">
                    H.No.: 22/106-A, Pateghar Mohallah,
                    <br />
                    Havanapet Street, Adoni,
                    <br />
                    Kurnool Dist., AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 98850 71716, <br />
                    +91 90144 56747.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
