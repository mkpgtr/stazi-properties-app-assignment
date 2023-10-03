
const randomImagesArray = [
    'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iaiEe8Ajq3a8/v3/-1x-1.jpg',
    'https://images.mansionglobal.com/im-129713?size=1.7777777777777777&width=1280',

    'https://www.luxuryabode.com/blog/blogimages/122.jpg',
    'https://ap.rdcpix.com/2044967547/ab6ee4d633b38c305bc691877589df46l-m22xd-w1020_h770_q80.jpg',
    'https://photos.zillowstatic.com/fp/32034f9fc25e55e0c48778bf9dfc17aa-cc_ft_576.jpg',
    'https://photos.zillowstatic.com/fp/f20b059f4626c8aa48ec9de0092725c2-cc_ft_576.jpg',
    'https://th.bing.com/th/id/R.006e095a88eba26584f328fb3943ef61?rik=b5u1ihjyy0Ky3Q&riu=http%3a%2f%2fluxport.s3.amazonaws.com%2f91095%2f594%2bMapleton%2bDr%2bHolmby%2bHills%2bCA%2bUSA%2b501917_10-EXT.jpg&ehk=DfNltMyXvIgPqQ46XD1L8fDphF6ktAaxLflnCAv3v7c%3d&risl=&pid=ImgRaw&r=0'
    
]
// ! took help from google to get this code.
export function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * randomImagesArray.length);
    return randomImagesArray[randomIndex];
  }

