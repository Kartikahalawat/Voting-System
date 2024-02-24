document.addEventListener("DOMContentLoaded", function() {
    const voteBtn = document.getElementById("voteBtn");
    const usernameInput = document.getElementById("username");
    const candidatesSelect = document.getElementById("candidates");
    const votingResults = document.getElementById("votingResults");
    
    voteBtn.addEventListener("click", function() {
        const username = usernameInput.value;
        const candidate = candidatesSelect.value;
        
        if (username.trim() !== "") {
            const result = document.createElement("div");
            result.classList.add("result");
            result.textContent = `${username} voted for ${candidate}`;
            votingResults.appendChild(result);
            
            updateTotalVotes(candidate);
        } else {
            alert("Please enter your name.");
        }
    });
    
    function updateTotalVotes(candidate) {
        const totalVotesElement = document.getElementById(`${candidate}Total`);
        let totalVotes = parseInt(totalVotesElement.textContent);
        totalVotes++;
        totalVotesElement.textContent = totalVotes;
    }
});
