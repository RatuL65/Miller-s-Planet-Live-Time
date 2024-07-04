// Calculate the Earth time passed since the release of Interstellar
const releaseDate = new Date('2014-10-26T00:00:00Z').getTime();
const dilationFactor = 7 * 365.25 * 24; // 7 Earth years in hours

function updateMillerTime() {
    const now = Date.now();
    const earthTimePassed = (now - releaseDate) / 1000; // in hours
    const millerTimePassed = earthTimePassed / dilationFactor;

    const millerYears = Math.floor(millerTimePassed / (365.25 * 24 * 3600));
    const remainingAfterYears = millerTimePassed % (365.25 * 24 * 3600);

    const millerMonths = Math.floor(remainingAfterYears / (30 * 24 * 3600));
    const remainingAfterMonths = remainingAfterYears % (30 * 24 * 3600);

    const millerDays = Math.floor(remainingAfterMonths / (24 * 3600));
    const remainingAfterDays = remainingAfterMonths % (24 * 3600);

    const millerHours = Math.floor(remainingAfterDays / 3600);
    const remainingAfterHours = remainingAfterDays % 3600;

    const millerMinutes = Math.floor(remainingAfterHours / 60);
    const remainingAfterMinutes = remainingAfterHours % 60;

    const millerSeconds = Math.floor(remainingAfterMinutes);
    const remainingAfterSeconds = (remainingAfterMinutes % 1) * 1000;

    const millerMilliseconds = Math.floor(remainingAfterSeconds);
    const remainingAfterMilliseconds = (remainingAfterSeconds % 1) * 1000;

    const millerMicroseconds = Math.floor(remainingAfterMilliseconds);
    const remainingAfterMicroseconds = (remainingAfterMilliseconds % 1) * 1000;

    const millerNanoseconds = Math.floor(remainingAfterMicroseconds);

    // YYYY year : MM month : DD day : HH hour : MM minute : SS second : MS millisecond : US microsecond : NS nanosecond
    const formattedMillerTime = 
        `${String(millerYears).padStart(4, '0')} year : ` +
        `${String(millerMonths).padStart(2, '0')} month : ` +
        `${String(millerDays).padStart(2, '0')} day : ` +
        `${String(millerHours).padStart(2, '0')} hour : ` +
        `${String(millerMinutes).padStart(2, '0')} minute : ` +
        `${String(millerSeconds).padStart(2, '0')} second : ` +
        `${String(millerMilliseconds).padStart(3, '0')} millisecond : ` +
        `${String(millerMicroseconds).padStart(3, '0')} microsecond : ` +
        `${String(millerNanoseconds).padStart(3, '0')} nanosecond`;

    document.getElementById('miller-time').innerText = formattedMillerTime;
}

// Update the time e
setInterval(updateMillerTime, 1);

// Initial update
updateMillerTime();
