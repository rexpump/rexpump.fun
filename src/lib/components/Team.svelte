<script lang="ts">
    import avelyFounder from '$lib/assets/avely-finance-founder.png';
    import zilpayFounder from '$lib/assets/zilpay-founder.png';
    import ivanBatalov from '$lib/assets/ivan-batalov.png';

    const teamMembers = [
        { name: 'AVELY FINANCE FOUNDER', role: 'Developer', image: avelyFounder },
        { name: 'ZILPAY FOUNDER', role: 'Developer', image: zilpayFounder },
        { name: 'IVAN BATALOV', role: 'Design', image: ivanBatalov }
    ];
</script>

<section id="team">
    <h2>OUR TEAM</h2>
    <div class="team-grid">
        {#each teamMembers as member}
            <div class="team-member">
                <div class="team-image-container">
                    <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    #team {
        text-align: center;
    }
    h2 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    .team-member {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .team-image-container {
        width: 180px;
        height: 180px;
        margin-bottom: 1.5rem;
    }
    .team-image-container img {
        width: 100%;
        height: 100%;
    }
    h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    p {
        color: #a0a0b0;
    }
</style>
