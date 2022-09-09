const date = new Date();
const hours = date.getHours();
export const handleGreeting = () => {
    if (hours >= 0 && hours < 11) {
        return 'Buổi sáng mà làm ly cà phê thì bá cháy';
    } else if (hours >= 11 && hours < 13) {
        return 'Trưa rồi, ăn cơm, làm ly trà uống cho khỏe bạn ơi!';
    } else if (hours >= 13 && hours < 18) {
        return 'Mời đồng nghiệp ly FREEZE cho tình cảm';
    } else if (hours >= 18 && hours < 24) {
        return ' Tối rồi, nghỉ ngơi đi, xíu ngủ sớm nhé!';
    }
};
