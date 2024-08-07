export default function() {
    return (
        <button
            className="relative py-2 flex items-center justify-center px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
        >
            <div className="absolute rounded-lg inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 
                [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
            </div>
            <span>Join waitlist</span>
        </button>
    );
}