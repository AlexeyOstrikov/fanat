import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import ScreenWrapper from './ScreenWrapper';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: '10rem',
        flexDirection: 'column',
        paddingVertical: '10rem',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14rem',
        marginVertical: '10rem',
    },
    text: {
        color: 'white',
        textAlign: 'justify',
        marginBottom: '5rem',
    }
});

const AboutAppScreen = () => {
    return (
        <ScreenWrapper>
            <View style={styles.page}>
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexGrow: 1}}
                >
                    <Text style={styles.title}>1. Ваши права на конфиденциальность</Text>
                    <Text style={styles.text}>
                        1.1 Эта Политика конфиденциальности («Политика») описывает ваши права на конфиденциальность в
                        отношении сбора, использования, хранения, передачи и защиты ваших личных данных GLHF.
                    </Text>
                    <Text style={styles.text}>
                        Вы принимаете эту Политику при использовании нашего Сервиса, регистрируетесь в качестве члена и
                        участвуете в любых матчах или соревнованиях на этом Сайте и приложении.
                    </Text>
                    <Text style={styles.text}>
                        Все определения, указанные в Условиях использования, также применяются к настоящей Политике.
                        Условия данной Политики могут время от времени обновляться, поэтому Вы должны периодически
                        читать эту Политику.
                    </Text>
                    <Text style={styles.title}>2. Что такое личные данные?</Text>
                    <Text style={styles.text}>
                        2.1 Под «личными данными» мы подразумеваем любую информацию, которая может быть использована для
                        идентификации вас как физического лица, прямо или косвенно, в частности, путем ссылки на ваше
                        имя, адрес электронной почты, идентификационный номер, данные о местоположении или
                        онлайн-идентификатор.
                    </Text>
                    <Text style={styles.title}>3. Мы защищаем ваши личные данные</Text>

                    <Text style={styles.text}>
                        3.1 GLHF является контролером персональных данных и, таким образом, несет ответственность за
                        любые персональные данные, предоставленные Вами на этом Сайте в соответствии с действующим
                        законодательством о защите данных.
                    </Text>
                    <Text style={styles.title}>4. Где мы собираем личные данные?</Text>
                    <Text style={styles.text}>
                        4.1 Чтобы использовать наш Сервис, нам необходимо собирать личные данные от вас, а иногда и из
                        других источников.
                    </Text>
                    <Text style={styles.text}>
                        Когда вы регистрируете учетную запись пользователя, мы собираем ваш адрес электронной почты и
                        пароль в соответствии с вашими данными. Мы также попросим вас выбрать имя пользователя
                        (псевдоним) для вашей учетной записи GLHF, а также указать дату рождения и страну.
                    </Text>
                    <Text style={styles.text}>
                        У вас также есть возможность зарегистрировать свою учетную запись пользователя, используя свою
                        учетную запись социальных сетей.
                    </Text>
                    <Text style={styles.text}>
                        При первом входе в систему после создания профиля мы можем запросить у вас дополнительные
                        Персональные данные, имя и фамилия, номер телефона и др.
                    </Text>
                    <Text style={styles.text}>
                        Подключив игровую учетную запись к вашей учетной записи пользователя, мы получим через вашу
                        игровую учетную запись доступ к истории игроков и игр, например к вашим игровым рангам,
                        результатам матчей и другой общедоступной информации профиля, связанной с игрой. Кроме того, мы
                        будем собирать стандартную техническую информацию, такую как ваш IP-адрес, информацию о
                        браузере, предпочитаемый язык, а также используемую вами ОС.
                    </Text>
                    <Text style={styles.title}>5. Какие личные данные обрабатывает GLHF?</Text>
                    <Text style={styles.text}>
                        5.1 GLHF обрабатывает ваши персональные данные для разных целей. Ниже приводится список
                        обработки ваших Персональных данных.
                    </Text>
                    <Text style={styles.text}>
                        а. Адрес электронной почты и пароли
                        Для управления вашей учетной записью.
                        Обработка необходима нам для соблюдения наших договорных обязательств перед вами, таких как
                        создание и администрирование вашей учетной записи, а также предоставление вам возможности
                        участвовать в соревнованиях.
                    </Text>
                    <Text style={styles.text}>
                        б. Страна, в которой вы живете, день рождения и др.
                        Предлагать вам соревнования и мероприятия, соответствующие вашему местоположению и возрасту.
                        Обработка ваших Персональных данных является Нашим законным интересом, чтобы обеспечить вам
                        лучший пользовательский опыт. Нам необходимо собирать ваши Персональные данные, чтобы иметь
                        возможность представить вам соответствующие действия.
                    </Text>
                    <Text style={styles.text}>
                        c. Имя пользователя
                        Для администрирования участия в турнирах и соревнованиях.
                        Обработка необходима для соблюдения Наших договорных обязательств перед вами.
                    </Text>
                    <Text style={styles.text}>
                        d. Игровой аккаунт
                        Для проверки вашей личности в игре и результатов матчей в соревнованиях, а также для сбора
                        статистики матчей и игр.
                        Обработка необходима для соблюдения Наших договорных обязательств перед вами.
                    </Text>
                    <Text style={styles.text}>
                        е. Адрес электронной почты, имя и фамилия и / или имя пользователя.
                        Для управления вопросами и жалобами в службу поддержки.
                        Обработка ваших персональных данных является Нашим законным интересом, чтобы иметь возможность
                        помочь вам с вопросами поддержки. Нам необходимо собрать ваши Персональные данные, чтобы мы
                        могли помочь вам с вашими вопросами.
                        Если Ваш вопрос касается жалобы, мы обработаем ее на законных основаниях в соответствии с нашими
                        договорными обязательствами.
                    </Text>
                    <Text style={styles.text}>
                        f. Адрес электронной почты, имя и фамилия и / или имя пользователя.
                        Чтобы отправлять вам материалы прямого маркетинга о наших новых функциях и играх.
                    </Text>
                    <Text style={styles.text}>
                        Для обработки вашего запроса об отказе от подписки на нашу рекламу.
                    </Text>
                    <Text style={styles.text}>
                        Обработка ваших персональных данных с целью отправки вам материалов прямого маркетинга является
                        Нашим законным интересом.
                    </Text>
                    <Text style={styles.text}>
                        Обработка ваших персональных данных для обработки вашего запроса об отказе от подписки на нашу
                        рекламу является Нашим законным интересом.
                    </Text>

                    <Text style={styles.title}>6. Передача ваших личных данных</Text>
                    <Text style={styles.text}>
                        6.1 GLHF не будет намеренно раскрывать или передавать какие-либо Персональные данные о вас
                        третьим лицам без вашего согласия, за исключением случаев, когда GLHF добросовестно считает, что
                        такое раскрытие необходимо для соблюдения применимого законодательства или договорных положений
                        в наших Условиях использования или для обеспечения соблюдения Условий. использования или если
                        такое раскрытие прямо разрешено Условиями.
                    </Text>
                    <Text style={styles.text}>
                        Когда мы передаем ваши персональные данные, мы всегда гарантируем, что наши сторонние поставщики
                        обрабатывают ваши персональные данные безопасно и надежно, не ниже наших стандартов.
                    </Text>
                    <Text style={styles.text}>
                        Ваше принятие любых Призов означает согласие на раскрытие GLHF Персональных данных, связанных с
                        Призами, в том числе третьим лицам в связи с присуждением таких Призов.
                    </Text>
                    <Text style={styles.title}>7. «Cookies»</Text>
                    <Text style={styles.text}>
                        7.1 «Cookies» - это небольшой текстовый файл, отправляемый с сервера GLHF в Ваш браузер. Файл
                        cookies не может идентифицировать вас лично, он может распознавать только браузер, установленный
                        на вашем компьютере, который используется для доступа к этому сайту. Разные файлы cookies
                        отправляются на разные компьютеры, если вы заходите на этот сайт с разных компьютеров. Файлы
                        cookies необходимы для правильной и безопасной работы системы, например, когда вы входите в свою
                        учетную запись пользователя. Файлы cookies также используются для измерения трафика данных в
                        систему и по статистическим причинам.
                    </Text>
                    <Text style={styles.text}>
                        Существует два типа файлов cookies: один из них называется «сеансовые файлы cookies», а другой -
                        «постоянные файлы cookies». Система GLHF использует как сеансовые, так и постоянные файлы
                        cookies.
                    </Text>
                    <Text style={styles.text}>
                        Сеансовый файл cookies отправляется между вашим компьютером и сервером GLHF, чтобы система
                        работала должным образом во время вашего посещения этого сайта. Файл cookies сеанса исчезает при
                        закрытии браузера и, таким образом, не сохраняется на компьютере.
                    </Text>
                    <Text style={styles.text}>
                        Постоянный файл cookies хранится на вашем компьютере и позволяет системам GLHF распознавать
                        IP-адрес вашего компьютера и веб-браузер при следующем входе в систему.
                    </Text>
                    <Text style={styles.text}>
                        Вы можете отказаться от использования системой GLHF файлов cookies на вашем компьютере, изменив
                        настройки в вашем браузере. Такие настройки могут означать, что определенные функции на этом
                        Сайте не будут работать должным образом или будут недоступны.
                    </Text>
                    <Text style={styles.title}>8. Ваши права</Text>
                    <Text style={styles.text}>
                        8.1 Ниже приведены права, которыми вы обладаете в соответствии с действующим
                        законодательством
                        о защите данных.
                    </Text>
                    <Text style={styles.text}>
                        8.1.1 Право на исправление - если режим оспаривания персональных данных о вас является
                        неточным
                        или неполным, вы имеете право попросить нас исправить это. Если эти Персональные данные были
                        переданы третьей стороне с вашего согласия или по юридическим причинам, мы также должны
                        попросить их исправить ваши Персональные данные.
                    </Text>
                    <Text style={styles.text}>
                        8.1.2 Право на удаление - вы имеете право удалить все ваши персональные данные, собранные
                        нами,
                        если у нас нет законных оснований для продолжения их обработки и хранения.
                    </Text>
                </ScrollView>
            </View>
        </ScreenWrapper>
    );
};

export default AboutAppScreen;
